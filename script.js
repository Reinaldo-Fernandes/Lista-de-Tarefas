document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('formulario-tarefas');
    const taskInput = document.getElementById('entradas-tarefas');
    const taskList = document.getElementById('lista-tarefas');
    const lightThemeButton = document.getElementById('tema-claro');
    const darkThemeButton = document.getElementById('tema-escuro');
    const clockElement = document.getElementById('relogio');
    const timeInput = document.getElementById('hora-inicio');

    // Função para atualizar o relógio
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000); // Atualiza o relógio a cada segundo

    // Carregar o tema salvo
    const savedTheme = localStorage.getItem('tema') || 'claro';
    document.body.classList.toggle('escuro', savedTheme === 'escuro');

    // Alternar temas
    lightThemeButton.addEventListener('click', () => {
        document.body.classList.remove('escuro');
        localStorage.setItem('tema', 'claro');
    });

    darkThemeButton.addEventListener('click', () => {
        document.body.classList.add('escuro');
        localStorage.setItem('tema', 'escuro');
    });

    // Adicionar nova tarefa
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        const taskTime = timeInput.value;
        if (taskText !== '' && taskTime !== '') {
            addTask(taskText, taskTime);
            taskInput.value = '';
            timeInput.value = '';
        }
    });

    // Adicionar tarefa ao DOM
    function addTask(text, time) {
        const li = document.createElement('li');
        li.textContent = `${text} - Início: ${time}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            li.remove();
            saveTasks();
        });

        li.appendChild(deleteButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
            saveTasks();
        });

        taskList.appendChild(li);
        saveTasks();

        // Configurar alerta para o horário da tarefa
        scheduleTaskAlert(text, time);
    }

    // Salvar tarefas no local storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.textContent.replace('Remover', '').trim(),
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Carregar tarefas do local storage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(task => {
            const [text, time] = task.text.split(' - Início: ');
            addTask(text, time);
            if (task.completed) {
                taskList.lastChild.classList.add('completed');
            }
        });
    }

    // Função para configurar alerta de horário
    function scheduleTaskAlert(taskText, taskTime) {
        const [taskHour, taskMinute] = taskTime.split(':').map(Number);
        const now = new Date();
        const taskDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), taskHour, taskMinute);

        const timeUntilAlert = taskDate.getTime() - now.getTime();

        if (timeUntilAlert > 0) {
            setTimeout(() => {
                alert(`Hora de começar a tarefa: ${taskText}`);
            }, timeUntilAlert);
        }
    }

    loadTasks();
    updateClock();
});

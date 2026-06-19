// Exercise Data
const exercises = [
    {
        id: 1,
        name: "Supino Reto",
        category: "chest",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        description: "Exercício básico para desenvolvimento do peitoral",
        instructions: [
            "Deite-se no banco com os pés apoiados no chão",
            "Segure a barra com as mãos na largura dos ombros",
            "Desça a barra até tocar levemente o peito",
            "Empurre a barra de volta à posição inicial"
        ],
        muscles: ["Peitoral Maior", "Tríceps", "Deltoide Anterior"],
        tips: [
            "Mantenha as escápulas retraídas",
            "Não arqueie excessivamente a lombar",
            "Controle o movimento na descida"
        ]
    },
    {
        id: 2,
        name: "Agachamento Livre",
        category: "legs",
        image: "https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?w=400",
        description: "Exercício fundamental para membros inferiores",
        instructions: [
            "Posicione a barra sobre os trapézios",
            "Pés na largura dos ombros, pontas levemente para fora",
            "Flexione os joelhos e quadris simultaneamente",
            "Desça até as coxas ficarem paralelas ao chão",
            "Retorne à posição inicial estendendo os joelhos"
        ],
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais"],
        tips: [
            "Mantenha o peito estufado durante todo o movimento",
            "Joelhos devem seguir a direção dos pés",
            "Não deixe os joelhos entrarem para dentro"
        ]
    },
    {
        id: 3,
        name: "Levantamento Terra",
        category: "back",
        image: "https://images.unsplash.com/photo-1603287681836-e54f0f6a39aa?w=400",
        description: "Exercício composto para cadeia posterior",
        instructions: [
            "Posicione-se com os pés na largura do quadril",
            "Agarre a barra com as mãos logo fora das pernas",
            "Mantenha as costas retas e o core contraído",
            "Levante a barra estendendo quadris e joelhos",
            "Retorne controladamente ao solo"
        ],
        muscles: ["Eretores da Espinha", "Glúteos", "Isquiotibiais", "Trapézio"],
        tips: [
            "Mantenha a barra próxima ao corpo",
            "Não arredonde as costas",
            "Use straps se necessário para pegada"
        ]
    },
    {
        id: 4,
        name: "Desenvolvimento Militar",
        category: "shoulders",
        image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400",
        description: "Exercício para desenvolvimento dos ombros",
        instructions: [
            "Em pé ou sentado, segure a barra na altura dos ombros",
            "Mãos na largura dos ombros ou ligeiramente mais aberto",
            "Empurre a barra verticalmente até estender os braços",
            "Desça controladamente até a posição inicial"
        ],
        muscles: ["Deltoide", "Tríceps", "Trapézio Superior"],
        tips: [
            "Mantenha o core contraído",
            "Não arqueie excessivamente a lombar",
            "Controle o movimento na descida"
        ]
    },
    {
        id: 5,
        name: "Rosca Direta",
        category: "arms",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400",
        description: "Exercício isolado para bíceps",
        instructions: [
            "Em pé, segure a barra com as palmas voltadas para cima",
            "Mantenha os cotovelos junto ao corpo",
            "Flexione os cotovelos levantando a barra",
            "Contraia o bíceps no topo do movimento",
            "Desça controladamente"
        ],
        muscles: ["Bíceps Braquial", "Braquial"],
        tips: [
            "Evite balançar o corpo",
            "Mantenha os punhos neutros",
            "Foque na contração do bíceps"
        ]
    },
    {
        id: 6,
        name: "Prancha Abdominal",
        category: "core",
        image: "https://images.unsplash.com/photo-1566241440091-ec10de8dbd5d?w=400",
        description: "Exercício isométrico para fortalecimento do core",
        instructions: [
            "Apoie os antebraços e pontas dos pés no chão",
            "Mantenha o corpo em linha reta da cabeça aos pés",
            "Contraia o abdômen e glúteos",
            "Respire normalmente durante a execução",
            "Mantenha a posição pelo tempo determinado"
        ],
        muscles: ["Reto Abdominal", "Transverso", "Oblíquos"],
        tips: [
            "Não deixe o quadril cair ou subir demais",
            "Mantenha o pescoço alinhado com a coluna",
            "Progridue aumentando o tempo gradualmente"
        ]
    },
    {
        id: 7,
        name: "Puxada Alta",
        category: "back",
        image: "https://images.unsplash.com/photo-1598971639058-211a73287138?w=400",
        description: "Exercício para desenvolvimento da largura das costas",
        instructions: [
            "Sente-se no aparelho e segure a barra com pegada pronada",
            "Mãos ligeiramente mais abertas que a largura dos ombros",
            "Puxe a barra em direção ao peito",
            "Contraia as escápulas no final do movimento",
            "Retorne controladamente à posição inicial"
        ],
        muscles: ["Grande Dorsal", "Redondo Maior", "Bíceps"],
        tips: [
            "Não use impulso com o tronco",
            "Mantenha o peito estufado",
            "Foque em puxar com os cotovelos"
        ]
    },
    {
        id: 8,
        name: "Leg Press",
        category: "legs",
        image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=400",
        description: "Exercício para membros inferiores no aparelho",
        instructions: [
            "Sente-se no aparelho com as costas bem apoiadas",
            "Posicione os pés na plataforma na largura dos ombros",
            "Destrave o aparelho e flexione os joelhos",
            "Desça até formar aproximadamente 90 graus",
            "Empurre a plataforma estendendo os joelhos"
        ],
        muscles: ["Quadríceps", "Glúteos", "Isquiotibiais"],
        tips: [
            "Não trave completamente os joelhos",
            "Mantenha os pés firmes na plataforma",
            "Controle o movimento na descida"
        ]
    }
];

// Workout data structure
let workoutData = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
};

// Nutrition data
let nutritionData = {};
let currentMeal = 'breakfast';
let currentFoodItem = null;

// Posts data
let posts = [
    {
        id: 1,
        author: "João Silva",
        avatar: "JS",
        date: "2024-01-15",
        content: "Hoje completei meu primeiro treino de perna da semana! Agachamento livre está ficando cada vez melhor. 💪 #FitnessJourney",
        likes: 24,
        comments: 5
    },
    {
        id: 2,
        author: "Maria Santos",
        avatar: "MS",
        date: "2024-01-14",
        content: "Dica do dia: Não esqueçam de se hidratar durante o treino! Estou bebendo pelo menos 3L de água por dia. 🚰",
        likes: 42,
        comments: 12
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadExercises();
    loadWorkout();
    loadNutrition();
    loadPosts();
    setupEventListeners();
    
    // Set today's date for nutrition
    document.getElementById('nutritionDate').valueAsDate = new Date();
});

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Exercise filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            filterExercises(filter);
        });
    });

    // Meal tabs
    const mealTabs = document.querySelectorAll('.meal-tab');
    mealTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            mealTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMeal = tab.dataset.meal;
            renderMeals();
        });
    });

    // Workout day selector
    const daySelect = document.getElementById('workoutDaySelect');
    daySelect.addEventListener('change', loadWorkout);

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
}

// Load and display exercises
function loadExercises() {
    const grid = document.getElementById('exerciseGrid');
    grid.innerHTML = '';
    
    exercises.forEach(exercise => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        card.dataset.category = exercise.category;
        card.onclick = () => showExerciseModal(exercise);
        
        card.innerHTML = `
            <img src="${exercise.image}" alt="${exercise.name}">
            <div class="exercise-card-body">
                <span class="exercise-card-category">${getCategoryName(exercise.category)}</span>
                <h3 class="exercise-card-title">${exercise.name}</h3>
                <p class="exercise-card-description">${exercise.description}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Get category name in Portuguese
function getCategoryName(category) {
    const categories = {
        chest: 'Peito',
        back: 'Costas',
        legs: 'Pernas',
        shoulders: 'Ombros',
        arms: 'Braços',
        core: 'Abdômen'
    };
    return categories[category] || category;
}

// Filter exercises by category
function filterExercises(filter) {
    const cards = document.querySelectorAll('.exercise-card');
    
    cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Show exercise modal
function showExerciseModal(exercise) {
    document.getElementById('modalExerciseTitle').textContent = exercise.name;
    document.getElementById('modalExerciseImage').src = exercise.image;
    
    const instructionsList = document.getElementById('modalExerciseInstructions');
    instructionsList.innerHTML = '';
    exercise.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    const musclesContainer = document.getElementById('modalExerciseMuscles');
    musclesContainer.innerHTML = '';
    exercise.muscles.forEach(muscle => {
        const tag = document.createElement('span');
        tag.className = 'muscle-tag';
        tag.textContent = muscle;
        musclesContainer.appendChild(tag);
    });
    
    const tipsList = document.getElementById('modalExerciseTips');
    tipsList.innerHTML = '';
    exercise.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    document.getElementById('exerciseModal').style.display = 'block';
}

// Close exercise modal
function closeModal() {
    document.getElementById('exerciseModal').style.display = 'none';
}

// Add exercise to workout
function addExerciseToWorkout() {
    const day = document.getElementById('workoutDaySelect').value;
    const exerciseName = prompt('Nome do exercício:');
    
    if (exerciseName) {
        const sets = parseInt(prompt('Número de séries:', '3')) || 3;
        const reps = prompt('Repetições (ex: 10-12):', '10');
        const load = parseFloat(prompt('Carga (kg):', '0')) || 0;
        const rest = parseInt(prompt('Descanso (segundos):', '60')) || 60;
        
        workoutData[day].push({
            id: Date.now(),
            name: exerciseName,
            sets,
            reps,
            load,
            rest
        });
        
        saveWorkout();
        loadWorkout();
    }
}

// Load workout for selected day
function loadWorkout() {
    const day = document.getElementById('workoutDaySelect').value;
    const tbody = document.getElementById('workoutTableBody');
    tbody.innerHTML = '';
    
    const exercises = workoutData[day] || [];
    
    exercises.forEach((exercise, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${exercise.name}</td>
            <td><input type="number" value="${exercise.sets}" onchange="updateWorkout('${day}', ${index}, 'sets', this.value)"></td>
            <td><input type="text" value="${exercise.reps}" onchange="updateWorkout('${day}', ${index}, 'reps', this.value)"></td>
            <td><input type="number" value="${exercise.load}" onchange="updateWorkout('${day}', ${index}, 'load', this.value)"></td>
            <td><input type="number" value="${exercise.rest}" onchange="updateWorkout('${day}', ${index}, 'rest', this.value)"></td>
            <td>
                <button class="action-btn delete" onclick="deleteExercise('${day}', ${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
    
    updateWorkoutSummary();
}

// Update workout data
function updateWorkout(day, index, field, value) {
    if (field === 'sets' || field === 'load' || field === 'rest') {
        value = parseFloat(value) || 0;
    }
    workoutData[day][index][field] = value;
    updateWorkoutSummary();
}

// Delete exercise from workout
function deleteExercise(day, index) {
    if (confirm('Tem certeza que deseja remover este exercício?')) {
        workoutData[day].splice(index, 1);
        saveWorkout();
        loadWorkout();
    }
}

// Save workout to localStorage
function saveWorkout() {
    localStorage.setItem('fitlife_workout', JSON.stringify(workoutData));
    showNotification('Treino salvo com sucesso!');
}

// Update workout summary
function updateWorkoutSummary() {
    const day = document.getElementById('workoutDaySelect').value;
    const exercises = workoutData[day] || [];
    
    const totalExercises = exercises.length;
    const totalSets = exercises.reduce((sum, ex) => sum + ex.sets, 0);
    const estimatedTime = Math.round(totalSets * 2.5); // Approx 2.5 min per set
    
    document.getElementById('totalExercises').textContent = totalExercises;
    document.getElementById('totalSets').textContent = totalSets;
    document.getElementById('estimatedTime').textContent = estimatedTime;
}

// Load nutrition data
function loadNutrition() {
    const savedData = localStorage.getItem('fitlife_nutrition');
    if (savedData) {
        nutritionData = JSON.parse(savedData);
    }
    renderMeals();
    calculateDailyTotals();
}

// Render meals
function renderMeals() {
    const container = document.getElementById('mealsContainer');
    const date = document.getElementById('nutritionDate').value;
    
    if (!nutritionData[date]) {
        nutritionData[date] = {
            breakfast: [],
            lunch: [],
            snack: [],
            dinner: []
        };
    }
    
    const mealNames = {
        breakfast: 'Café da Manhã',
        lunch: 'Almoço',
        snack: 'Lanche',
        dinner: 'Jantar'
    };
    
    container.innerHTML = '';
    
    Object.keys(mealNames).forEach(mealKey => {
        const section = document.createElement('div');
        section.className = 'meal-section';
        section.style.display = mealKey === currentMeal ? 'block' : 'none';
        
        const foods = nutritionData[date][mealKey] || [];
        
        section.innerHTML = `
            <div class="meal-header">
                <h3 class="meal-title">${mealNames[mealKey]}</h3>
                <button class="btn-primary" onclick="openFoodModal('${mealKey}')">
                    <i class="fas fa-plus"></i> Adicionar Alimento
                </button>
            </div>
            <div class="food-list" id="foodList-${mealKey}">
                ${foods.map((food, index) => `
                    <div class="food-item">
                        <div class="food-info">
                            <div class="food-name">${food.name}</div>
                            <div class="food-details">${food.quantity}g</div>
                        </div>
                        <div class="food-macros">
                            <span class="macro-tag">P: ${food.protein.toFixed(1)}g</span>
                            <span class="macro-tag">C: ${food.carbs.toFixed(1)}g</span>
                            <span class="macro-tag">G: ${food.fat.toFixed(1)}g</span>
                        </div>
                        <button class="action-btn delete" onclick="removeFood('${mealKey}', ${index})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(section);
    });
}

// Open food modal
function openFoodModal(meal) {
    currentMeal = meal;
    document.getElementById('foodModal').style.display = 'block';
    
    // Clear form
    document.getElementById('foodName').value = '';
    document.getElementById('foodQuantity').value = '100';
    document.getElementById('foodProtein').value = '';
    document.getElementById('foodCarbs').value = '';
    document.getElementById('foodFat').value = '';
}

// Close food modal
function closeFoodModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Add food item
function addFoodItem() {
    openFoodModal(currentMeal);
}

// Confirm add food
function confirmAddFood() {
    const name = document.getElementById('foodName').value;
    const quantity = parseFloat(document.getElementById('foodQuantity').value) || 100;
    const protein = parseFloat(document.getElementById('foodProtein').value) || 0;
    const carbs = parseFloat(document.getElementById('foodCarbs').value) || 0;
    const fat = parseFloat(document.getElementById('foodFat').value) || 0;
    
    if (!name) {
        alert('Por favor, insira o nome do alimento');
        return;
    }
    
    const date = document.getElementById('nutritionDate').value;
    
    if (!nutritionData[date]) {
        nutritionData[date] = {
            breakfast: [],
            lunch: [],
            snack: [],
            dinner: []
        };
    }
    
    // Calculate macros based on quantity
    const factor = quantity / 100;
    
    nutritionData[date][currentMeal].push({
        name,
        quantity,
        protein: protein * factor,
        carbs: carbs * factor,
        fat: fat * factor
    });
    
    localStorage.setItem('fitlife_nutrition', JSON.stringify(nutritionData));
    closeFoodModal();
    renderMeals();
    calculateDailyTotals();
    showNotification('Alimento adicionado com sucesso!');
}

// Remove food item
function removeFood(meal, index) {
    const date = document.getElementById('nutritionDate').value;
    nutritionData[date][meal].splice(index, 1);
    localStorage.setItem('fitlife_nutrition', JSON.stringify(nutritionData));
    renderMeals();
    calculateDailyTotals();
}

// Calculate daily totals
function calculateDailyTotals() {
    const date = document.getElementById('nutritionDate').value;
    const meals = nutritionData[date] || { breakfast: [], lunch: [], snack: [], dinner: [] };
    
    let totalProtein = 0;
    let totalCarbs = 0;
    let totalFat = 0;
    
    Object.values(meals).forEach(foods => {
        foods.forEach(food => {
            totalProtein += food.protein;
            totalCarbs += food.carbs;
            totalFat += food.fat;
        });
    });
    
    const totalCalories = Math.round(totalProtein * 4 + totalCarbs * 4 + totalFat * 9);
    
    // Update display
    document.getElementById('totalProtein').textContent = `${totalProtein.toFixed(1)}g`;
    document.getElementById('totalCarbs').textContent = `${totalCarbs.toFixed(1)}g`;
    document.getElementById('totalFat').textContent = `${totalFat.toFixed(1)}g`;
    document.getElementById('totalCalories').textContent = `${totalCalories} kcal`;
    
    // Update progress bars (assuming daily goals)
    const proteinGoal = 150;
    const carbGoal = 250;
    const fatGoal = 70;
    
    document.getElementById('proteinFill').style.width = `${Math.min((totalProtein / proteinGoal) * 100, 100)}%`;
    document.getElementById('carbFill').style.width = `${Math.min((totalCarbs / carbGoal) * 100, 100)}%`;
    document.getElementById('fatFill').style.width = `${Math.min((totalFat / fatGoal) * 100, 100)}%`;
    
    document.getElementById('proteinValue').textContent = `${totalProtein.toFixed(1)}g`;
    document.getElementById('carbValue').textContent = `${totalCarbs.toFixed(1)}g`;
    document.getElementById('fatValue').textContent = `${totalFat.toFixed(1)}g`;
}

// Load posts
function loadPosts() {
    const container = document.getElementById('postsContainer');
    container.innerHTML = '';
    
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.innerHTML = `
            <div class="post-header">
                <div class="post-avatar">${post.avatar}</div>
                <div>
                    <div class="post-author">${post.author}</div>
                    <div class="post-date">${formatDate(post.date)}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-actions">
                <button class="post-action-btn" onclick="likePost(${post.id})">
                    <i class="far fa-heart"></i> ${post.likes}
                </button>
                <button class="post-action-btn">
                    <i class="far fa-comment"></i> ${post.comments}
                </button>
                <button class="post-action-btn" onclick="sharePost(${post.id})">
                    <i class="fas fa-share"></i> Compartilhar
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Create new post
function createPost() {
    const content = document.getElementById('postContent').value;
    
    if (!content.trim()) {
        alert('Por favor, escreva algo para publicar');
        return;
    }
    
    const newPost = {
        id: Date.now(),
        author: "Você",
        avatar: "VC",
        date: new Date().toISOString().split('T')[0],
        content,
        likes: 0,
        comments: 0
    };
    
    posts.unshift(newPost);
    document.getElementById('postContent').value = '';
    loadPosts();
    showNotification('Post publicado com sucesso!');
}

// Like post
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        loadPosts();
    }
}

// Share post
function sharePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        const text = encodeURIComponent(post.content + " - Compartilhado via FitLife");
        window.open(`https://wa.me/?text=${text}`, '_blank');
    }
}

// Share to social media
function shareToSocial(platform) {
    const workoutDay = document.getElementById('workoutDaySelect').value;
    const exercises = workoutData[workoutDay] || [];
    
    let shareText = "Confira meu treino no FitLife! 💪\n\n";
    
    if (exercises.length > 0) {
        shareText += `Treino de ${getDayName(workoutDay)}:\n`;
        exercises.forEach(ex => {
            shareText += `- ${ex.name}: ${ex.sets}x${ex.reps} (${ex.load}kg)\n`;
        });
    } else {
        shareText += "Comece sua jornada fitness hoje mesmo!";
    }
    
    shareText += "\n\n#FitLife #Fitness #Saúde";
    
    const encodedText = encodeURIComponent(shareText);
    
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
        instagram: `https://www.instagram.com/`,
        twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
        whatsapp: `https://wa.me/?text=${encodedText}`
    };
    
    if (platform === 'copy') {
        copyProgress();
    } else if (urls[platform]) {
        window.open(urls[platform], '_blank', 'width=600,height=400');
    }
}

// Copy progress to clipboard
function copyProgress() {
    const workoutDay = document.getElementById('workoutDaySelect').value;
    const exercises = workoutData[workoutDay] || [];
    
    let text = "🏋️ Meu Treino FitLife\n\n";
    
    if (exercises.length > 0) {
        text += `Dia: ${getDayName(workoutDay)}\n\n`;
        exercises.forEach(ex => {
            text += `• ${ex.name}\n  ${ex.sets} séries x ${ex.reps} reps @ ${ex.load}kg\n  Descanso: ${ex.rest}s\n\n`;
        });
    } else {
        text += "Nenhum exercício registrado ainda.\n";
    }
    
    text += "\n#FitLife #Fitness";
    
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Texto copiado para a área de transferência!');
    }).catch(err => {
        alert('Erro ao copiar: ' + err);
    });
}

// Get day name in Portuguese
function getDayName(day) {
    const days = {
        monday: 'Segunda-feira',
        tuesday: 'Terça-feira',
        wednesday: 'Quarta-feira',
        thursday: 'Quinta-feira',
        friday: 'Sexta-feira',
        saturday: 'Sábado',
        sunday: 'Domingo'
    };
    return days[day] || day;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
}

// Show notification
function showNotification(message) {
    // Simple notification using alert for now
    // Could be enhanced with a custom notification system
    console.log('Notification:', message);
}

// Close modals when clicking outside
window.onclick = function(event) {
    const exerciseModal = document.getElementById('exerciseModal');
    const foodModal = document.getElementById('foodModal');
    
    if (event.target === exerciseModal) {
        exerciseModal.style.display = 'none';
    }
    if (event.target === foodModal) {
        foodModal.style.display = 'none';
    }
}

// Save nutrition data when date changes
document.getElementById('nutritionDate').addEventListener('change', function() {
    renderMeals();
    calculateDailyTotals();
});

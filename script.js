// Global variables
let currentSeason = 'monsoon';
let currentMood = 'stress';

// Season data
const seasons = {
    monsoon: {
        title: "Monsoon Season",
        period: "June – September",
        icon: "fas fa-cloud-rain",
        color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        bgColor: "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
        vegetables: [
            "Bottle gourd", "Bitter gourd", "Okra (Ladyfinger)", "Cucumber", 
            "Amaranth", "Chili", "Snake gourd", "Ridge gourd", 
            "Drumstick (Moringa)", "Cluster beans"
        ],
        fruits: [
            "Jamun", "Lychee", "Peach", "Plum", "Pear", 
            "Papaya", "Banana", "Guava", "Pineapple"
        ],
        nuts: ["Almonds", "Walnuts", "Raisins"]
    },
    winter: {
        title: "Winter Season",
        period: "October – February",
        icon: "fas fa-snowflake",
        color: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
        bgColor: "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
        vegetables: [
            "Spinach", "Carrot", "Radish", "Peas", "Cauliflower", 
            "Coriander", "Broccoli", "Beetroot", "Turnip", 
            "Fenugreek leaves (Methi)", "Mustard greens"
        ],
        fruits: [
            "Strawberry", "Orange", "Sweet lime (Mosambi)", "Apple", 
            "Grapes", "Pomegranate", "Chiku (Sapota)", "Custard apple"
        ],
        nuts: ["Dates", "Cashews", "Pistachios"]
    },
    summer: {
        title: "Summer Season", 
        period: "March – May",
        icon: "fas fa-sun",
        color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        bgColor: "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
        vegetables: [
            "Tomato", "Brinjal (Eggplant)", "Beans", "Pumpkin", 
            "Cabbage", "Mint", "Zucchini", "Capsicum (Bell pepper)", 
            "Lettuce", "Bottle gourd"
        ],
        fruits: [
            "Mango", "Watermelon", "Muskmelon", "Papaya", 
            "Banana", "Jackfruit", "Jamun"
        ],
        nuts: ["Figs (dried)", "Apricots (dried)", "Fox nuts (Makhana)"]
    }
};

// Mood data
const moods = {
    stress: {
        title: "Stress / Anxiety",
        emoji: "🌪",
        color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
        nutrients: ["Magnesium", "Omega-3", "Vitamin C"],
        foods: ["Spinach", "Almonds", "Salmon", "Walnuts", "Oranges", "Kiwi"],
        teas: [
            { name: "Chamomile Tea", benefit: "Calming for nerves", emoji: "🌼" },
            { name: "Green Tea", benefit: "L-theanine + antioxidants for focus", emoji: "🍃" }
        ]
    },
    sadness: {
        title: "Sadness / Low Mood",
        emoji: "😔",
        color: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
        nutrients: ["Tryptophan", "B6/B12", "Complex carbs"],
        foods: ["Bananas", "Oats", "Turkey", "Leafy greens", "Legumes", "Sweet potato"],
        teas: [
            { name: "Wort Tea", benefit: "Natural mood lifter (avoid if on meds)", emoji: "🌞" },
            { name: "Lemon Balm Tea", benefit: "Gentle uplift, reduces anxiety", emoji: "🍋🌿" }
        ]
    },
    fatigue: {
        title: "Fatigue / Exhaustion", 
        emoji: "😴",
        color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        nutrients: ["Iron", "B-vitamins", "Protein"],
        foods: ["Lentils", "Spinach", "Jaggery", "Eggs", "Yogurt", "Dates", "Nuts"],
        teas: [
            { name: "Ginseng Tea", benefit: "Energy booster", emoji: "🔋" },
            { name: "Peppermint Tea", benefit: "Refreshing, clears mental fog", emoji: "🌱" }
        ]
    },
    anger: {
        title: "Anger / Frustration",
        emoji: "😡", 
        color: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
        nutrients: ["Potassium", "Magnesium", "Antioxidants"],
        foods: ["Bananas", "Avocados", "Dark chocolate", "Blueberries", "Cherries"],
        teas: [
            { name: "Lavender Tea", benefit: "Soothing, reduces irritation", emoji: "💜" },
            { name: "Holy Basil (Tulsi) Tea", benefit: "Balances stress hormones", emoji: "🌿" }
        ]
    },
    boredom: {
        title: "Boredom / Emptiness",
        emoji: "😐",
        color: "linear-gradient(135deg, #10b981 0%, #059669 100%)", 
        nutrients: ["Fiber", "Healthy fats", "Water"],
        foods: ["Apples", "Carrots", "Cucumbers", "Hummus", "Popcorn", "Roasted chana"],
        teas: [
            { name: "Ginger Tea", benefit: "Warms, reduces mindless snacking", emoji: "🫚" },
            { name: "Hibiscus Tea", benefit: "Tangy, refreshing, curbs sugar cravings", emoji: "🌺" }
        ]
    }
};

// Crops data
const crops = [
    {
        name: "Tomato",
        emoji: "🍅",
        sow: "June–August",
        transplant: "August–September", 
        harvest: "November–January",
        color: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
    },
    {
        name: "Spinach",
        emoji: "🥬",
        sow: "October–February",
        transplant: "Same pot (no transplant)",
        harvest: "January–March", 
        color: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
    },
    {
        name: "Okra (Ladyfinger)",
        emoji: "🌶️",
        sow: "Feb–June",
        transplant: "No transplant", 
        harvest: "June–August",
        color: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)"
    },
    {
        name: "Cucumber", 
        emoji: "🥒",
        sow: "Feb–March or July–August",
        transplant: "No transplant",
        harvest: "April–May or Sept–Oct",
        color: "linear-gradient(135deg, #22c55e 0%, #059669 100%)"
    },
    {
        name: "Coriander",
        emoji: "🌿", 
        sow: "Sept–Feb",
        transplant: "No transplant",
        harvest: "Feb–April",
        color: "linear-gradient(135deg, #16a34a 0%, #166534 100%)"
    },
    {
        name: "Curry Leaves",
        emoji: "🍃",
        sow: "June–Sept", 
        transplant: "Sept–Oct",
        harvest: "Feb–May", 
        color: "linear-gradient(135deg, #15803d 0%, #14532d 100%)"
    },
    {
        name: "Brinjal (Eggplant)",
        emoji: "🍆",
        sow: "July–Sept",
        transplant: "Aug–Sept",
        harvest: "Nov–Feb", 
        color: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
    },
    {
        name: "Lettuce",
        emoji: "🥬",
        sow: "Sept–Nov",
        transplant: "Nov", 
        harvest: "Jan–March",
        color: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)"
    },
    {
        name: "Radish",
        emoji: "🔴",
        sow: "Sept–Feb",
        transplant: "No transplant",
        harvest: "Nov–March", 
        color: "linear-gradient(135deg, #f87171 0%, #ef4444 100%)"
    },
    {
        name: "Carrot",
        emoji: "🥕",
        sow: "Sept–Nov", 
        transplant: "No transplant",
        harvest: "Jan–March",
        color: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSeasonalGuide();
    initializeFarmerCalendar();
    initializeMoodFood();
    initializeAnimations();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Login modal functions
function openLoginModal(type) {
    const modal = document.getElementById('loginModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const submitBtn = document.getElementById('modalSubmitBtn');
    
    modal.classList.add('active');
    
    switch(type) {
        case 'community':
            modalTitle.textContent = 'Join Our Community';
            modalSubtitle.textContent = 'Connect with fellow urban farmers';
            submitBtn.textContent = 'Join Community';
            break;
        case 'farm':
            modalTitle.textContent = 'Start Your Urban Farm';
            modalSubtitle.textContent = 'Begin your farming journey today';
            submitBtn.textContent = 'Start Farming';
            break;
        case 'hydroponics':
            modalTitle.textContent = 'Get Hydroponics Kit';
            modalSubtitle.textContent = 'Order your smart farming kit';
            submitBtn.textContent = 'Order Kit';
            break;
        default:
            modalTitle.textContent = 'Join AgriXplorers';
            modalSubtitle.textContent = 'Start your urban farming journey';
            submitBtn.textContent = 'Get Started';
    }
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside
document.getElementById('loginModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLoginModal();
    }
});

// Seasonal guide functions
function initializeSeasonalGuide() {
    showSeason('monsoon');
}


function showSeason(event, season) {
    // Support two call signatures:
    // 1) showSeason(event, 'monsoon')  <-- called from buttons
    // 2) showSeason('monsoon')         <-- called programmatically (initialize)
    if (typeof season === 'undefined') {
        season = event;
        event = null;
    }

    currentSeason = season;

    // Update active tab
    document.querySelectorAll('.season-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Determine active tab (either from event or by matching the onclick attribute)
    let activeTab = null;
    if (event && event.target) {
        activeTab = event.target.closest('.season-tab');
    } else {
        const tabs = Array.from(document.querySelectorAll('.season-tab'));
        activeTab = tabs.find(tab => {
            const onclick = tab.getAttribute('onclick') || '';
            return onclick.includes("'" + season + "'") || onclick.includes('"' + season + '"');
        });
    }
    if (activeTab) activeTab.classList.add('active');

    // Update content
    const seasonData = seasons[season];
    const content = document.getElementById('seasonContent');

    content.innerHTML = `
        <div class="season-header">
            <div class="season-badge">
                <i class="${seasonData.icon}"></i>
                <div>
                    <h3>${seasonData.title}</h3>
                    <p>${seasonData.period}</p>
                </div>
            </div>
        </div>

        <div class="season-grid">
            <div class="season-category">
                <div class="category-header">
                    <div class="category-icon vegetables">🥬</div>
                    <h4>Vegetables</h4>
                </div>
                <div class="items-grid">
                    ${seasonData.vegetables.map(veg => `
                        <div class="item vegetables">${veg}</div>
                    `).join('')}
                </div>
            </div>

            <div class="season-category">
                <div class="category-header">
                    <div class="category-icon fruits">🍎</div>
                    <h4>Fruits</h4>
                </div>
                <div class="items-grid">
                    ${seasonData.fruits.map(fruit => `
                        <div class="item fruits">${fruit}</div>
                    `).join('')}
                </div>
            </div>

            <div class="season-category">
                <div class="category-header">
                    <div class="category-icon nuts">🥜</div>
                    <h4>Dry Fruits & Nuts</h4>
                </div>
                <div class="items-grid">
                    ${seasonData.nuts.map(nut => `
                        <div class="item nuts">${nut}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    content.style.background = seasonData.bgColor;
}


// Farmer calendar functions
function initializeFarmerCalendar() {
    const cropsGrid = document.getElementById('cropsGrid');
    
    cropsGrid.innerHTML = crops.map((crop, index) => `
        <div class="crop-card animate-fade-in-up" style="animation-delay: ${index * 100}ms">
            <div class="crop-header">
                <div class="crop-icon" style="background: ${crop.color}">
                    ${crop.emoji}
                </div>
                <div>
                    <h3>${crop.name}</h3>
                </div>
            </div>
            
            <div class="crop-timeline">
                <div class="timeline-item">
                    <div class="timeline-icon sow">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <div class="timeline-content">
                        <h4>Sow Seeds</h4>
                        <p>${crop.sow}</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon transplant">
                        <i class="fas fa-clock"></i>
                    </div>
                    <div class="timeline-content">
                        <h4>Transplant</h4>
                        <p>${crop.transplant}</p>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-icon harvest">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <div class="timeline-content">
                        <h4>Harvest</h4>
                        <p>${crop.harvest}</p>
                    </div>
                </div>
            </div>
            
            <div class="crop-action">
                <button class="crop-btn" style="background: ${crop.color}">
                    Get Growing Guide
                </button>
            </div>
        </div>
    `).join('');
}

// Mood food functions
function initializeMoodFood() {
    showMood('stress');
}


function showMood(event, mood) {
    // Support two call signatures:
    // 1) showMood(event, 'stress')  <-- called from buttons
    // 2) showMood('stress')         <-- called programmatically (initialize)
    if (typeof mood === 'undefined') {
        mood = event;
        event = null;
    }

    currentMood = mood;

    // Update active button
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Determine active button (either from event or by matching the onclick attribute)
    let activeBtn = null;
    if (event && event.target) {
        activeBtn = event.target.closest('.mood-btn');
    } else {
        const buttons = Array.from(document.querySelectorAll('.mood-btn'));
        activeBtn = buttons.find(btn => {
            const onclick = btn.getAttribute('onclick') || '';
            return onclick.includes("'" + mood + "'") || onclick.includes('"' + mood + '"');
        });
    }
    if (activeBtn) activeBtn.classList.add('active');

    // Update content
    const moodData = moods[mood];
    const content = document.getElementById('moodContent');

    content.innerHTML = `
        <div class="mood-header">
            <div class="mood-badge">
                <span class="mood-emoji">${moodData.emoji}</span>
                <h3>${moodData.title}</h3>
            </div>
        </div>

        <div class="mood-grid">
            <div class="mood-category">
                <h4><span>🔹</span>Key Nutrients</h4>
                <div class="nutrients-list">
                    ${moodData.nutrients.map(nutrient => `
                        <div class="nutrient-item">${nutrient}</div>
                    `).join('')}
                </div>
            </div>

            <div class="mood-category">
                <h4><span>🥗</span>Recommended Foods</h4>
                <div class="foods-grid">
                    ${moodData.foods.map(food => `
                        <div class="food-item">${food}</div>
                    `).join('')}
                </div>
            </div>

            <div class="mood-category">
                <h4><span>🍵</span>Herbal Teas</h4>
                <div class="teas-list">
                    ${moodData.teas.map(tea => `
                        <div class="tea-item">
                            <div class="tea-header">
                                <span>${tea.emoji}</span>
                                <span class="tea-name">${tea.name}</span>
                            </div>
                            <p class="tea-benefit">${tea.benefit}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}


// Animation functions
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in-up').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
document.querySelector('.modal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for joining AgriXplorers! We will contact you soon.');
    
    // Close modal
    closeLoginModal();
    
    // Reset form
    this.reset();
});

// Contact form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    console.log('Contact form submitted:', data);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.reset();
});

// Add loading states and error handling
function showLoading(element) {
    element.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLoginModal();
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger some action
        } else {
            // Swipe down - could trigger some action
        }
    }
}

// Performance optimization - lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Add scroll progress indicator
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // You can use this to show a progress bar
    document.documentElement.style.setProperty('--scroll-progress', scrollPercent + '%');
}

window.addEventListener('scroll', updateScrollProgress);

// Add theme toggle functionality (optional)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

// Add search functionality (if needed)
function searchContent(query) {
    const searchResults = [];
    const content = document.body.innerText.toLowerCase();
    
    if (content.includes(query.toLowerCase())) {
        // Implement search logic
        console.log('Search results for:', query);
    }
    
    return searchResults;
}

// Add print styles support
function preparePrint() {
    window.print();
}

// Add social sharing functionality
function shareContent(platform, url, text) {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Add analytics tracking (placeholder)
function trackEvent(category, action, label) {
    // Implement analytics tracking
    console.log('Event tracked:', { category, action, label });
}

// Add error boundary
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You can send this to an error tracking service
});

// Add service worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
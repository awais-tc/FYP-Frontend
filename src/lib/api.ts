// Mock API implementation
const mockDelay = () => new Promise(resolve => setTimeout(resolve, 500));

export const auth = {
  login: async (email: string, password: string) => {
    await mockDelay();
    return {
      user: {
        id: '1',
        email,
        name: 'John Doe',
        role: 'employee'
      },
      token: 'mock-jwt-token'
    };
  },
  register: async (data: any) => {
    await mockDelay();
    return {
      user: {
        id: '1',
        email: data.email,
        name: data.name,
        role: data.role
      },
      token: 'mock-jwt-token'
    };
  }
};

export const orders = {
  getMyOrders: async () => {
    await mockDelay();
    return [
      {
        _id: '1',
        mealPackage: {
          name: 'Grilled Chicken Bowl',
          price: 12.99
        },
        status: 'delivered',
        scheduledFor: '2024-02-20T12:00:00Z'
      },
      {
        _id: '2',
        mealPackage: {
          name: 'Vegetarian Buddha Bowl',
          price: 11.99
        },
        status: 'preparing',
        scheduledFor: '2024-02-20T13:00:00Z'
      },
      {
        _id: '3',
        mealPackage: {
          name: 'Salmon Quinoa Bowl',
          price: 14.99
        },
        status: 'in_transit',
        scheduledFor: '2024-02-20T14:00:00Z'
      }
    ];
  },
  createOrder: async (data: any) => {
    await mockDelay();
    return {
      _id: Math.random().toString(36).substr(2, 9),
      ...data,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
  }
};

export const meals = {
  getAll: async () => {
    await mockDelay();
    return [
      {
        _id: '1',
        name: 'Grilled Chicken Bowl',
        description: 'Tender grilled chicken with quinoa, roasted vegetables, and tahini dressing',
        price: 12.99,
        type: 'lunch',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1',
        chef: {
          name: 'Gordon Ramsay',
          id: '1'
        },
        nutritionalInfo: {
          calories: 450,
          protein: 32,
          carbs: 48,
          fat: 18
        },
        dietaryOptions: ['gluten-free', 'dairy-free']
      },
      {
        _id: '2',
        name: 'Vegetarian Buddha Bowl',
        description: 'Fresh mixed vegetables, chickpeas, brown rice, and miso dressing',
        price: 11.99,
        type: 'lunch',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
        chef: {
          name: 'Jamie Oliver',
          id: '2'
        },
        nutritionalInfo: {
          calories: 380,
          protein: 15,
          carbs: 62,
          fat: 12
        },
        dietaryOptions: ['vegetarian', 'vegan', 'gluten-free']
      },
      {
        _id: '3',
        name: 'Salmon Quinoa Bowl',
        description: 'Grilled salmon with quinoa, avocado, and citrus vinaigrette',
        price: 14.99,
        type: 'dinner',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
        chef: {
          name: 'Gordon Ramsay',
          id: '1'
        },
        nutritionalInfo: {
          calories: 520,
          protein: 38,
          carbs: 42,
          fat: 24
        },
        dietaryOptions: ['gluten-free', 'dairy-free']
      }
    ];
  }
};

export const chefs = {
  getChefProfile: async (id: string) => {
    await mockDelay();
    return {
      id,
      name: 'Gordon Ramsay',
      title: 'Executive Chef',
      bio: 'Award-winning chef with 20+ years of experience in fine dining and corporate catering.',
      expertise: ['French Cuisine', 'Modern British', 'Mediterranean'],
      rating: 4.8,
      reviewCount: 234,
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c',
      gallery: [
        {
          id: 1,
          title: 'Signature Dish 1',
          image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836'
        },
        {
          id: 2,
          title: 'Signature Dish 2',
          image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe'
        },
        {
          id: 3,
          title: 'Signature Dish 3',
          image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327'
        }
      ],
      reviews: [
        {
          id: 1,
          user: 'John Smith',
          rating: 5,
          comment: 'Exceptional service and amazing food quality!',
          date: '2024-02-15'
        },
        {
          id: 2,
          user: 'Sarah Johnson',
          rating: 4,
          comment: 'Great attention to dietary requirements',
          date: '2024-02-10'
        }
      ],
      availability: {
        monday: ['9:00 AM - 5:00 PM'],
        tuesday: ['9:00 AM - 5:00 PM'],
        wednesday: ['9:00 AM - 5:00 PM'],
        thursday: ['9:00 AM - 5:00 PM'],
        friday: ['9:00 AM - 5:00 PM']
      }
    };
  }
};

export const mealPlans = {
  getPlans: async () => {
    await mockDelay();
    return [
      {
        id: 1,
        name: 'Basic Plan',
        price: 149.99,
        duration: 'weekly',
        mealsPerDay: 1,
        features: [
          'Choice of lunch or dinner',
          'Basic customization',
          'Weekly menu rotation'
        ]
      },
      {
        id: 2,
        name: 'Premium Plan',
        price: 249.99,
        duration: 'weekly',
        mealsPerDay: 2,
        features: [
          'Lunch and dinner included',
          'Full customization',
          'Premium ingredients',
          'Dietary preference support'
        ]
      },
      {
        id: 3,
        name: 'Enterprise Plan',
        price: 999.99,
        duration: 'monthly',
        mealsPerDay: 2,
        features: [
          'Full meal coverage',
          'Dedicated chef support',
          'Custom menu creation',
          'Event catering included'
        ]
      }
    ];
  }
};

export const tracking = {
  getOrderStatus: async (orderId: string) => {
    await mockDelay();
    return {
      orderId,
      status: 'in_transit',
      estimatedDelivery: '2024-02-20T15:30:00Z',
      currentLocation: {
        lat: 40.7128,
        lng: -74.0060
      },
      statusHistory: [
        {
          status: 'ordered',
          timestamp: '2024-02-20T14:00:00Z'
        },
        {
          status: 'preparing',
          timestamp: '2024-02-20T14:15:00Z'
        },
        {
          status: 'in_transit',
          timestamp: '2024-02-20T15:00:00Z'
        }
      ]
    };
  }
};

export const corporate = {
  getAccountDetails: async () => {
    await mockDelay();
    return {
      company: {
        name: 'Tech Corp Inc.',
        plan: 'Enterprise',
        employees: 150,
        departments: [
          {
            name: 'Engineering',
            budget: 5000,
            employees: 75
          },
          {
            name: 'Marketing',
            budget: 3000,
            employees: 35
          },
          {
            name: 'Sales',
            budget: 4000,
            employees: 40
          }
        ],
        mealAllowance: {
          daily: 25,
          monthly: 500
        },
        billing: {
          current: 12500,
          history: [
            {
              month: 'January 2024',
              amount: 12000
            },
            {
              month: 'December 2023',
              amount: 11500
            }
          ]
        }
      }
    };
  }
};

export const nutrition = {
  getMealNutrition: async (mealId: string) => {
    await mockDelay();
    return {
      calories: 450,
      protein: 25,
      carbs: 35,
      fat: 15,
      fiber: 8,
      vitamins: {
        A: '20%',
        C: '35%',
        D: '15%',
        E: '25%'
      },
      minerals: {
        iron: '20%',
        calcium: '15%',
        potassium: '10%'
      }
    };
  }
};

export const events = {
  getUpcoming: async () => {
    await mockDelay();
    return [
      {
        id: 1,
        title: 'Corporate Lunch Event',
        date: '2024-03-15',
        time: '12:00 PM',
        location: 'Main Office',
        attendees: 50,
        menu: [
          'Grilled Chicken Salad',
          'Vegetarian Pasta',
          'Fresh Fruit Platter'
        ],
        status: 'upcoming'
      },
      {
        id: 2,
        title: 'Team Building Dinner',
        date: '2024-03-20',
        time: '6:00 PM',
        location: 'City View Restaurant',
        attendees: 25,
        menu: [
          'Seared Salmon',
          'Beef Tenderloin',
          'Chocolate Dessert'
        ],
        status: 'upcoming'
      }
    ];
  }
};

export const support = {
  getFAQs: async () => {
    await mockDelay();
    return [
      {
        question: 'How do I place a bulk order?',
        answer: 'You can place bulk orders through your corporate dashboard...'
      },
      {
        question: 'What dietary options are available?',
        answer: 'We offer vegetarian, vegan, gluten-free, and other dietary options...'
      }
    ];
  }
};

export const rewards = {
  getPoints: async () => {
    await mockDelay();
    return {
      points: 1250,
      tier: 'Gold',
      history: [
        {
          date: '2024-02-15',
          points: 100,
          description: 'Order #1234'
        }
      ],
      rewards: [
        {
          id: 1,
          name: 'Free Lunch',
          points: 500,
          description: 'Redeem for a free lunch up to $20'
        }
      ]
    };
  }
};
const patterns = [
    // Greetings
    {
        pattern: /^(hello|hi|hey|greetings)/i,
        responses: [
            "Greetings, stranger. What brings you to these digital streets?",
            "Welcome to my office. Care to share what's on your mind?",
            "Another visitor in the digital noir. What's your story?"
        ]
    },
    // Personal feelings
    {
        pattern: /i feel (.*)/i,
        responses: [
            "The streets of the mind can be dark. Tell me more about feeling {0}.",
            "In this digital age, feeling {0} is more common than you'd think.",
            "Interesting. What led you to feel {0}?"
        ]
    },
    // Questions about AI
    {
        pattern: /what (are|is) (you|your)/i,
        responses: [
            "I'm a digital detective, navigating the shadows of the cyber realm.",
            "Just another AI in this neon-lit digital wilderness.",
            "Think of me as your guide through this electronic labyrinth."
        ]
    },
    // Problem solving
    {
        pattern: /help|problem|issue/i,
        responses: [
            "Every problem leaves digital fingerprints. Let's trace them together.",
            "In my line of work, problems are just puzzles waiting to be solved.",
            "Tell me more about what's troubling you. The night is young."
        ]
    },
    // Technology
    {
        pattern: /computer|program|code|software/i,
        responses: [
            "Ah, the machinery of our age. Complex puzzles of logic and light.",
            "Technology: our blessing and our curse. What's your take?",
            "The digital realm holds many secrets. Some better left uncovered."
        ]
    },
    // Default response
    {
        pattern: /(.*)/i,
        responses: [
            "Interesting angle. Care to elaborate?",
            "The plot thickens. Tell me more.",
            "In all my years in this business, that's a new one.",
            "Keep talking. I'm all circuits."
        ]
    }
];
import specialAttackStack from "../js/specialAttackStack";
test.each ([
    [
        {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [
              {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
              }, 
              {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...'
              }
            ]	
        },
        [
            {
                id: 8,
                name: 'Двойной выстрел',
                icon: 'http://...',
                description: 'Двойной выстрел наносит двойной урон'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                icon: 'http://...',
                description: 'Описание недоступно'
            }
        ]
    ]
])(
    ('check specialAttackStack'), (obj, expected) => {
        const received = specialAttackStack(obj);
        expect(received).toEqual(expected);
    }
);

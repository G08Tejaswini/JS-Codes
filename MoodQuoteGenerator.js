//arrays!!
function Quotes(){
    let happy = ['Success is getting what you want. Happiness is wanting what you get.',
                'The best way to cheer yourself up is to try to cheer somebody else up.',
                'The habit of being happy enables one to be freed, or largely freed, from the domination of outward conditions.',
                'Happiness is like a butterfly which, when pursued, is always beyond our grasp, but, if you will sit down quietly, may alight upon you.']

    let sad = ['There is no greater sorrow than to recall happiness in times of misery.',
                'He who has felt the deepest grief is best able to experience supreme happiness.',
                'Every man has his secret sorrows which the world knows not.',
                'Tears are the silent language of grief'
    
    ]

    let Result = document.getElementById('quotes').value.toLowerCase()
    if (Result == 'happy'){
        let hapy = Math.floor(Math.random()* happy.length);
        let quote = happy[hapy];
        document.getElementById('mOOdQuote').innerText = quote;
    }else if (Result == 'sad'){
        let sed = Math.floor(Math.random() * sad.length);
        let quote1 = sad[sed];
        document.getElementById('mOOdQuote').innerText = quote1;
        }
}
import './lib/lib';
import $ from './lib/lib';

$('#first').click(() => {
    $('div').eq(1).fadeToggle(800);
})

$('[data-count="second"]').click(() => {
    $('div').eq(2).fadeToggle (800);
})
$('button').eq(2).click(() => {
    $('.w-500').fadeToggle (800);
})
$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet tenetur fugiat veritatis officiis. Nesciunt consequatur, quibusdam fugit voluptates molestiae odio natus quod, enim necessitatibus, quia laborum asperiores. Distinctio, quae ab? Labore enim ad voluptatibus. Minus, rem numquam autem accusamus porro adipisci dolorum nisi. Magnam, voluptate. Accusamus modi soluta, vel, maiores aliquam magni exercitationem facere suscipit temporibus dolores, est vero eum?'
        },
        btns: {
            count: 2,
            settings: [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Data saved')
                    }
                ]
            ]
        }
    })
})


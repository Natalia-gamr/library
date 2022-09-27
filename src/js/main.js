import './lib/lib';
import $ from './lib/lib';

// $('button').on('click', function() {
//     $('div').eq(1).toggleClass('active');
// });

$('div').click(function() {
    console.log($(this).index())
})

$('.findme').fadeIn('700')





// console.log($('div').eq(2).find('.some'))

// console.log($('.some').closest('.zdsfh'))
// console.log($('.findme').siblings())

// $('button').html('hi');



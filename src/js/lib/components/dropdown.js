import $ from "../core";

$.prototype.dropdown = function() {
    for ( let i = 0; i < this.length; i++) {
        const id = this[i].getAttribute('id');
        $(this[i]).click(() => {
            $(`[data-toggle-id="${id}"]`).fadeToggle(300)
        })
    }
};

$('.dropdown-toggle').dropdown()

$('.wrap').html(`
    <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuBtn">Dropdown menu</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuBtn">
            <a href="" class="dropdown-item">action</a>
            <a href="" class="dropdown-item">action 2</a>
            <a href="" class="dropdown-item">action 3</a>
        </div>
    </div>
`);

$('.dropdown-toggle').dropdown()



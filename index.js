'use strict';
function getUserInput() {
  return $('#shopping-list-entry').val();
}

function generateHtmlItem(item) {
  return `
    <li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
  `;
}

function addResults(html) { 
  $('.shopping-list').append(html); 
}


function main() {
  $('#js-shopping-list-form').submit(function (event) {
    event.preventDefault();
    const item = getUserInput();
    this.reset();
    const html = generateHtmlItem(item);
    addResults(html);
  });
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    //   const targetItem = $(event.currentTarget).closest('li');
    //   console.log('test', targetItem);
    //   targetItem.toggleClass('.shopping-item__checked');
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    $(event.currentTarget).closest('li').remove();
  });
}

$(main);

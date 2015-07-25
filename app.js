import Cycle from '@cycle/core';
import {makeDOMDriver, h} from '@cycle/web';

function main(drivers) {
  return {
    DOM: drivers.DOM.get('input', 'click')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        h('div', [
          h('input', {type: 'checkbox'}), 'Toggle me',
          h('p', toggled ? 'ON' : 'off')
        ])
      )
  };
}

let drivers = {
  DOM: makeDOMDriver('#app')
};

Cycle.run(main, drivers);
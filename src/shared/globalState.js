
import { atom, selector } from 'recoil';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false
});

export const handleChangeState = selector({
  key: 'darkModeToggle',
  set: ({ get,set }) => {
    const currentValue = get(darkModeState);

    set(darkModeState, !currentValue)
  }
})
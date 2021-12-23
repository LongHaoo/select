import KeyCode from 'rc-util/lib/KeyCode';
console.log(KeyCode);

/** keyCode Judgment function */
export function isRightKeyWhenOpen(currentKeyCode: number): boolean {
  if ([KeyCode.SHIFT, KeyCode.TAB, KeyCode.BACKSPACE, KeyCode.ESC].includes(currentKeyCode)) {
    return false;
  } else {
    return true;
  }
}

export function isRightKeyWhenClose(currentKeyCode: number): boolean {
  console.log(currentKeyCode);

  if ([
    // System function button 
    KeyCode.WIN_KEY,
    KeyCode.ESC,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    KeyCode.SHIFT,
    // F1-F12
    ...GetFKeyCodeArr(0),
  ].includes(currentKeyCode)) {
    return false;
  } else {
    return true;
  }
}


export function GetFKeyCodeArr(start: number, end: number = 12): number[] {
  const result = [];
  for(let i = start; i <= end; i += 1) {
    result.push(KeyCode[`F${i}`]);
  }
  return result;
}

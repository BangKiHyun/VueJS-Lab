# Vue.js v-on 이벤트 정리

## 이벤트 종류

| 이벤트명  | 설명                                             |
| --------- | ------------------------------------------------ |
| click     | 마우스를 클릭했을 때 실행함                      |
| dblclick  | 마우스를 더블 클릭했을 때 실행함                 |
| mouseover | 마우스의 포인트가 요소 위로 올라왔을 때 실행함   |
| mouseout  | 마우스의 포인트가 요소 밖으로 벗어났을 때 실행함 |
| mousemove | 마우스의 포인트가 이동했을 때 실행함             |
| mousedown | 마우스의 버튼을 눌렀을 때 실행함                 |
| mouseup   | 마우스의 버튼을 놓았을 때 실행함                 |
| keydown   | 키보드의 키를 눌렀을 때 실행함                   |
| keyup     | 키보드의 키를 놓았을 때 실행함                   |
| keypress  | 키보드의 키를 눌렀다가 놓았을 때 실행함          |
| change    | 요소가 변경될 때 실행함                          |
| submit    | `<Form>`이 제출될 때 실행함                      |
| reset     | `<Form>`이 재설정될 때 실행함                    |
| select    | `<select>`의 값이 선택되었을 때 실행함           |
| focus     | 태그에 포커스가 있을 때 실행함                   |
| blur      | 태그에 포커스를 잃었을 때 실행함                 |

## 기본 수식어

이벤트 정의 후 `.`으로 연결하여 사용

| 수식어 명 | 설명                                             | 비고                                                         |
| --------- | ------------------------------------------------ | ------------------------------------------------------------ |
| .prevent  | 기본 이벤트의 자동 실행을 중단 시킴              | preventDefault() 과 동일한 기능                              |
| .stop     | 이벤트가 전파되는 것을 중단 시킴 (Bubbling 중단) | stopPropagation() 과 동일한 기능                             |
| .capture  | 포착 단계에서만 이벤트를 발생시킴                | 내부 엘리먼트를 대상으로 하는 이벤트가 해당 엘리먼트에서 처리되기 전에 여기서 처리함 |
| .self     | 발생 단계에서만 이벤트를 발생시킴                | event.target이 엘리먼트 자체인 경우에만 트리거를 처리, 자식 엘리먼트에서는 실행안됨 |
| .once     | 이벤트를 한번만 실행 시킴                        |                                                              |
| .passive  | 기본 이벤트를 취소할 수 없게 함                  | 있을지 모를 `.preventDefault()`를 실행 안되게 함.            |
export function addEvent(vue, target, name) {
  naver.maps.Event.addListener(target, name, event => vue.$emit(name, event));
}

export function addEvent(vue, target, name) {
  naver.maps.Event.addListener(target, name, () => vue.$emit(name));
}

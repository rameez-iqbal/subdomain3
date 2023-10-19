export function useScroll() {
  const scrollTop = ref(0);

  const handleScroll = () => {
    scrollTop.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scrollTop,
  };
}

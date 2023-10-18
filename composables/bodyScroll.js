export function useScroll() {
  const scrollTop = ref(0);

  const handleScroll = () => {
    scrollTop.value = window.scrollY;
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onBeforeMount(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return {
    scrollTop,
  };
}

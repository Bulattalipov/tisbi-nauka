export default function() {
  const container  = document.querySelector('.sections-container');
  if(!container) return;

  container.classList.add('sections-container--before')

  if(document.body.offsetHeight > 4000) {
    container.classList.add('sections-container--after')
  }
}

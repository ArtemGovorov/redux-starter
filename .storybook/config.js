import { configure } from '@kadira/storybook';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context('../src', true, /-storybook\.jsx?$/));
}

configure(loadStories, module);

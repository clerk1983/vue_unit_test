import {mount} from '@vue/test-utils'
import App from '@/components/App'



test("Test App Component", () => {
  const wrapper = mount(App)
  expect(wrapper.text()).toBe('Hello World')
})

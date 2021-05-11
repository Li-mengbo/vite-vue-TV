import { mount } from '@vue/test-utils'
import Test from '../src/App.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('333')
})

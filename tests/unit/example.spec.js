import { mount } from "@vue/test-utils";
import App from "@/components/App.vue";

it("Test App Component", () => {
  const wrapper = mount(App, {
    propsData: {
      msg: "World",
    },
  });
  console.log(wrapper.props())
  expect(wrapper.text()).toBe("Hello World");
});

import { mount } from "@vue/test-utils";
import App from "./App.vue";

describe("Test suite", () => {
  it("Should work.", () => {
    expect(mount(App)).toBeTruthy();
  });
});

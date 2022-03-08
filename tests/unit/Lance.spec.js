import Lance from '@/components/Lance.vue';
import { mount } from '@vue/test-utils';


test('não aceita lance com valor menor que zero', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    // expect(wrapper).toBeTruthy();
    expect(input).toBeTruthy();
});
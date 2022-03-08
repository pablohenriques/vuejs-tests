import Lance from '@/components/Lance.vue';
import { mount } from '@vue/test-utils';


test('não aceita lance com valor menor que zero', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    // expect(wrapper).toBeTruthy();
    input.setValue(-100);
    // expect(input).toBeTruthy();
    const lancesEmitidos = wrapper.emitted('novo-lance');
    wrapper.trigger('submit');
    expect(lancesEmitidos).toBeUndefined();
});

test('emite um lance quando o valor é maior do que zero', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    input.setValue(100);
    wrapper.trigger('submit');
    const lancesEmitidos = wrapper.emitted('novo-lance');
    expect(lancesEmitidos).toHaveLength(1);
});

test('emite o valor esperado de um lance válido', () => {
    const wrapper = mount(Lance);
    const input = wrapper.find('input');
    input.setValue(100);
    wrapper.trigger('submit');
    const lancesEmitidos = wrapper.emitted('novo-lance');
    const lance = parseInt(lancesEmitidos[0][0]);
    expect(lance).toBe(100);
});
import Leilao from '@/components/Leilao.vue';
import { mount } from '@vue/test-utils';


const leilao = {
    produto: 'Um livro da casa do codigo',
    lanceInicial: 49,
    descricao: 'Um maravilhoso livro sobre vuejs'
};


describe('Um leilao exibe os dados do produto', () => {
    
    test('exibe os dados do leilão no card', () => {
        const wrapper = mount(Leilao, {
            propsData: {
                leilao
            }
        });
        // expect(wrapper).toBeTruthy();
        const header = wrapper.find('.card-header').element;
        const title = wrapper.find('.card-title').element;
        const text = wrapper.find('.card-text').element;

        expect(header.textContent).toContain(`Estamos leiloando um(a): ${leilao.produto}`);
        expect(title.textContent).toContain(`Lance inicial: R$ ${leilao.lanceInicial}`);
        expect(text.textContent).toContain(leilao.descricao);
    });
});
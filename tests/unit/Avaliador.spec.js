import Avaliador from '@/views/Avaliador'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { getLeiloes } from '@/http'
import flushPromises from 'flush-promises'

jest.mock('@/http')

const leiloes = [
    {
        produto: 'Um livro da casa do codigo',
        lanceInicial: 55,
        descricao: 'Livro sobre VueJS'
    },
    {
        produto: 'Um livro da casa do codigo',
        lanceInicial: 50,
        descricao: 'Livro sobre teste unitario'
    }
];

describe('Um avaliador que se conecta com a API', () => {

    test('mostra todos os leiloes retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce(leiloes);   
        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        });
        await flushPromises();
        const totalLeiloesExibidos = wrapper.findAll('.leilao').length;
        expect(totalLeiloesExibidos).toBe(leiloes.length);
    });

    test('nao ha leiloes retornados pela API', async () => {
        getLeiloes.mockResolvedValueOnce([]);   
        const wrapper = mount(Avaliador, {
            stubs: {
                RouterLink: RouterLinkStub
            }
        });
        await flushPromises();
        const totalLeiloesExibidos = wrapper.findAll('.leilao').length;
        expect(totalLeiloesExibidos).toBe(0);
    });

});
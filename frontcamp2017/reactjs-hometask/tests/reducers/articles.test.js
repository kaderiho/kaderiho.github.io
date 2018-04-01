import articlesReducer from '../../src/browser/reducers/articles';
import { ADD_ARTICLE, REMOVE_ARTICLE } from '../../src/browser/actions/types';

describe('Articles Reducer', () => {

    it('Has a default state', () => {
        expect(articlesReducer(undefined, { type: 'unexpected' })).toEqual([]);
    });

    it('ADD_ARTICLE action works fine', () => {
        const newArticle = { id: 1, author: 'author', message: 'title' };

        expect(articlesReducer([], {type: ADD_ARTICLE, payLoad: newArticle})).toEqual([newArticle]);
    });

    it('REMOVE_ARTICLE action works fine', () => {
        const removedArticle = { id: 1, author: 'author', message: 'title' };

        expect(articlesReducer([removedArticle], {type: REMOVE_ARTICLE, payLoad: removedArticle})).toEqual([]);
    })
});
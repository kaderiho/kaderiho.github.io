import articlesReducer from '../../src/browser/reducers/articles';
import { ADD_ARTICLE, REMOVE_ARTICLE } from '../../src/browser/actions/types';
import deepFreeze from 'deep-freeze';

describe('Articles Reducer', () => {

    it('Has a default state', () => {
        expect(articlesReducer(undefined, { type: 'unexpected' })).toEqual([]);
    });

    it('ADD_ARTICLE action works fine', () => {
        const newArticle = { id: 1, author: 'author', message: 'title' };

        expect(articlesReducer(deepFreeze([]), {type: ADD_ARTICLE, payLoad: newArticle})).toEqual([newArticle]);
    });

    it('REMOVE_ARTICLE action works fine', () => {
        const removedArticle = { id: 1, author: 'author', message: 'title' };

        expect(articlesReducer(deepFreeze([removedArticle]), {type: REMOVE_ARTICLE, payLoad: removedArticle})).toEqual([]);
    })
});
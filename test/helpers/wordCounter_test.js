/* eslint-disable padded-blocks, no-unused-expressions, no-underscore-dangle */
import { expect } from 'chai';
import WordCounter from '../../src/app/helpers/wordCounter';
import sinon from 'sinon';

describe('WordCounter', () => {

  let instance;
  const date = new Date();
  const string = 'Aleksandr Orlov has in the last year become one of the most loved figures in British culture and his catchphrase – Simples! – can be heard from the playground to the office. Written in his inimitable voice (as dictated to his sidekick Sergei), his autobiography will offer the same humour as his TV ads, giving us the full story of his ancestor’s Journey of Courageousness from the Kalahari to Russia, the low-down on his life as entrepreneur and his love of grubs and cravats.‘My name is Aleksandr Orlov. I live and make work in Moscow. I have a success business. I have a mansion decorate with many fine things. I have a naturally majestic posture. But I would have none of these things if it were not for my family. This book is dedicated to them. I also wish to inspire next generation of young businesskats. I am hope that this book will show what can come of courage, hard work and a good fur-care regime. I am also hope that with royalties I will be able to re-marble roof on Orlov family mansion'; //eslint-disable-line
  const file = new File([string], 'test.txt', { type: 'text/plain', lastModified: date });
  const callback = sinon.spy();

  beforeEach(() => {
    instance = new WordCounter(file, callback);
  });

  it('initializes with file and callback args', () => {
    expect(instance.file).to.equal(file);
    expect(instance.callback).to.equal(callback);
  });

  it('creates a new FileReader instance on initialization', () => {
    expect(instance.reader).to.be.instanceOf(window.FileReader);
  });

  describe('#_parseTextFile', () => {

    it('returns a promise', () => {
      expect(instance._parseTextFile()).to.be.instanceOf(Promise);
    });

    it('returns the content of the file as a string on resolution', (done) => {
      instance._parseTextFile()
        .then(
          (result) => {
            expect(result).to.equal(string);
            done();
          }
        )
        .catch();
    });
  });

});

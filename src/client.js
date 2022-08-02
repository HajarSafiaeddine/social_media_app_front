import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'h93cm1to',
  dataset: 'production',
  apiVersion: '2022-04-12',
  useCdn: true,
  token: 'skq8IkoJ7c2GNaIqqNvrLl9SoyJX03sVrkEv76BHFdXhlpBJm7aiaW5QFoXnOTbqxMgELXkHLROOJJREPNcX3kJBbpHj8jTlR4Ar60KhWWZYK3DKlRWrknsUSQKLnph97uSuLkrdNsGKpl3VtwXOhsCCtLPmVRi0ZzL64qUlOSQNiQ1k2Of2',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
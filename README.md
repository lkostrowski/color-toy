# Color picking app (test excersise)

## Start

This app is bootstrapped with `create-react-app`. You can run it with `npm run start` and test with 
`npm run test` after `npm i`.

## Few notes for reviewers

- I changed a little autosuggest requirement to filtered list, because it seemed more visually interesting to me.
However to change it to more classic autosuggest, it only requires to hide list if search query length <= 2.
- I filter results with checking if either name and color hex *contains* string, not starting with it.
- I used Rematch to reduce boilerplate of redux. I discovered it recently and can't wait to try it. I enjoy it but I see it's design flaw, based on singleton.
- I'd use Typescript or Flowtype at least for services. React components may be typed enough with PropTypes, but I don't like limitation of IDE support. 
It also covers big part of testing and scalability.
- I'd implement Storybook for visual testing and standalone development
- About tests: I added some units for services and model logic. I also used snapshot testing for quick tests of HTML markup. I don't have much experience of e2e testing so I decided not to fake it ;) I also worked with manual QA teams.
I don't have strong opinion about snapshots, but I think it can be developer-friendly improvement instead of manually check each class and node rendered.
 

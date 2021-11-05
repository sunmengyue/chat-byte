import shortid from 'shortid';
import txtgen from 'txtgen';
import faker from 'faker';
import _ from 'lodash';

const users = generateUsers(10);
export const contacts = _.mapKeys(users, 'user_id');
export const getMessages = (messagesPerUser) => {
  let messages = {};
  _.forEach(users, (user) => {
    messages[user.user_id] = {
      ..._.mapKeys(generateMsgs(messagesPerUser), 'number'),
    };
  });
  return messages;
};

// just an example of how the state object is structured
export const state = {
  user: generateUser(),
  messages: getMessages(10),
  typing: '',
  contacts,
  activeUserId: null,
};

/**
 * @returns {Object} - a new user object
 */
export function generateUser() {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    profile_pic: faker.internet.avatar(),
    status: txtgen.sentence(),
    user_id: shortid.generate(),
  };
}
/**
 * @returns {Object} - a new message object
 */
function generateMsg(number) {
  return {
    number,
    text: txtgen.sentence(),
    is_user_msg: faker.random.boolean(),
  };
}
/**
 *
 * @param {Number} numberOfUsers - the number of users to be generated
 * @param {Function} generateUser - function that generates a single user
 * @returns {Array} - an array of user objects with length n = numberOfUsers
 */
function generateUsers(numberOfUsers) {
  return Array.from({ length: numberOfUsers }, () => generateUser());
}

function generateMsgs(numberOfMsgs) {
  return Array.from({ length: numberOfMsgs }, (v, i) => generateMsg(i));
}

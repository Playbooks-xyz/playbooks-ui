import { config, library } from '@fortawesome/fontawesome-svg-core';
import * as FadIcons from 'icons/fad-icons';
import * as FarIcons from 'icons/far-icons';

library.add({ ...FadIcons, ...FarIcons });
config.autoAddCss = false;

export default library;

// Docs
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

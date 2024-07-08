import { config, library } from '@fortawesome/fontawesome-svg-core';
import * as FabIcons from 'utils/font-awesome/fab-icons';
import * as FadIcons from 'utils/font-awesome/fad-icons';
import * as FarIcons from 'utils/font-awesome/far-icons';

library.add({ ...FabIcons, ...FadIcons, ...FarIcons });
config.autoAddCss = false;

export default library;

// Docs
// https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

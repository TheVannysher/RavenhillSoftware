import {
  featherArrowLeft,
  featherCheck,
  featherCheckCircle,
  featherChevronDown,
  featherChevronUp,
  featherEdit,
  featherFeather,
  featherLoader,
  featherLogIn,
  featherLogOut,
  featherPlus,
  featherSettings,
  featherUser,
  featherX,
  featherZap,
} from '@ng-icons/feather-icons';

const icons = {
  featherArrowLeft,
  featherEdit,
  featherLoader,
  featherCheck,
  featherFeather,
  featherCheckCircle,
  featherUser,
  featherChevronDown,
  featherChevronUp,
  featherX,
  featherPlus,
  featherSettings,
  featherLogIn,
  featherLogOut,
  featherZap,
};

enum Feather {
  ArrowLeft = 'featherArrowLeft',
  Check = 'featherCheck',
  CheckCircle = 'featherCheckCircle',
  ChevronDown = 'featherChevronDown',
  ChevronUp = 'featherChevronUp',
  Edit = 'featherEdit',
  Feather = 'featherFeather',
  Loader = 'featherLoader',
  LogIn = 'featherLogIn',
  LogOut = 'featherLogOut',
  Plus = 'featherPlus',
  Settings = 'featherSettings',
  User = 'featherUser',
  X = 'featherX',
  Zap = 'featherZap',
}

export const NGIcons = {
  feather: Feather,
};
export default { ...icons };

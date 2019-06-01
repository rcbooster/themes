import './main.html';
import './main.scss';

import { Meteor } from 'meteor/meteor';

import toastr from 'toastr';

toastr.options = {
	'toastClass': 'toastr',
	'debug': Meteor.isDevelopment,
	'positionClass': 'toast-position',
};

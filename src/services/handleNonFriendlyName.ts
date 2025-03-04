import IconObjectKey from '../types/IconObjectKey';

function handleNonFriendlyName(objectKey: IconObjectKey | string) {
	if (objectKey === 'ISO3166-2-lvl4') {
		return 'Country/State Code';
	}
	return;
}

export default handleNonFriendlyName;

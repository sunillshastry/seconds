import IconObjectKey from '../types/IconObjectKey';

function formatObjectKeyName(objectKey: IconObjectKey | string) {
	return objectKey.split('_').join(' ');
}

export default formatObjectKeyName;

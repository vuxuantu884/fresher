# Create folder
mkdir "src/handlers/$name"

# create hook file
touch "src/handlers/$name/$name.hooks.ts"
echo "
${COPPYRIGHT}
export default function use${upper_name}() {
  return {};
}
" >> "src/handlers/$name/$name.hooks.ts"
echo "=============> Created src/handlers/$name/$name.hooks.ts"

# create service file
touch "src/handlers/$name/$name.services.ts"
echo "
${COPPYRIGHT}
import { ResponseBase } from 'utils/api/api.types';
import ApiUtils from 'utils/api/api.utils';
import { ${upper_name} } from './$name.types'

const apiName = {
  '${name}': '${name}'
};

export const apiFetch${upper_name} = async (): Promise<${upper_name}[]> => {
  const res = await ApiUtils.fetch<undefined, ResponseBase<${upper_name}[]>>(apiName['${name}']);

  return res?.data || [];
};
" >> "src/handlers/$name/$name.services.ts"
echo "=============> Created src/handlers/$name/$name.services.ts"

# create types file
touch "src/handlers/$name/$name.types.ts"
echo "
export interface ${upper_name} {
    name: string;
}
" >> "src/handlers/$name/$name.types.ts"
echo "=============> Created src/handlers/$name/$name.types.ts"
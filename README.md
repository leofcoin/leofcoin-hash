# leofcoin-hash
> Hashing functions used in Leofcoin

## INSTALL
```sh
  yarn add leofcoin-hash
```
or
```sh
  npm install --save leofcoin-hash
```
## USAGE
```js
import {keccak} from 'leofcoin-hash';

keccak('some data') // 512
keccak('some data', 256) // 256
// or
import {keccak256} from 'leofcoin-hash';
keccak256('some-data')
```

// Copyright (C) 2023 Haderech Pte. Ltd.
// SPDX-License-Identifier: Apache-2.0

import { describe, expect, it } from 'vitest';

import { Keyring } from './keyring.js';

import { u8aToHex } from '@pinot/util';

describe('Keyring', () => {
  describe('createFromUri', () => {
    it('creates a keypair from secret uri', () => {
      const alice = new Keyring({ type: 'sr25519' }).createFromUri('//Alice');

      const address = 'u7wHUNZPHFf3THGEUGr0EqZ_WgiyFWIVMzeOaVoTnpW2ifQ';
      const addressHex = '0xef01d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d';

      expect(alice.address).toEqual(address);
      expect(u8aToHex(alice.addressRaw)).toEqual(addressHex);
    });
  });
});

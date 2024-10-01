// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bellcoin: Network = {
  messagePrefix: 'Bells Signed Message:\n',
  bech32: 'bel',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 25,
  scriptHash: 30,
  wif: 0x99,
};
export const testnet: Network = {
  messagePrefix: 'Bells Signed Message:\n',
  bech32: 'tbel',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 33,
  scriptHash: 22,
  wif: 0x9e,
};

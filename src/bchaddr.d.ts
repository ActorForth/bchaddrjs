/** Declaration file generated by dts-gen */

export const Format: {
    Bitpay: string;
    Cashaddr: string;
    Legacy: string;
    Slpaddr: string;
};

export const Network: {
    Mainnet: string;
    Testnet: string;
};

export const Type: {
    P2PKH: string;
    P2SH: string;
};

export function InvalidAddressError(): void;

export function decodeAddress(address: any): any;

export function detectAddressFormat(address: any): any;

export function detectAddressNetwork(address: any): any;

export function detectAddressType(address: any): any;

export function encodeAsBitpay(decoded: any): any;

export function encodeAsCashaddr(decoded: any): any;

export function encodeAsLegacy(decoded: any): any;

export function encodeAsRegtestaddr(decoded: any): any;

export function encodeAsSlpRegtestaddr(decoded: any): any;

export function encodeAsSlpaddr(decoded: any): any;

export function isBitpayAddress(address: any): any;

export function isCashAddress(address: any): any;

export function isLegacyAddress(address: any): any;

export function isMainnetAddress(address: any): any;

export function isP2PKHAddress(address: any): any;

export function isP2SHAddress(address: any): any;

export function isSlpAddress(address: any): any;

export function isTestnetAddress(address: any): any;

export function isValidAddress(input: any): any;

export function toBitpayAddress(address: any): any;

export function toCashAddress(address: any): any;

export function toLegacyAddress(address: any): any;

export function toRegtestAddress(address: any): any;

export function toSlpAddress(address: any): any;

export function toSlpRegtestAddress(address: any): any;


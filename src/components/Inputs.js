import * as React from 'react';
import { Input, Box } from 'native-base';

export default function InputText({ ph }) {
    return (
      <Box alignItems="center" style={{ paddingBottom: 10 }}>
        <Input size="2xl" variant="rounded" placeholder={ph} w="100%" style={{ marginLeft: 10 }} />
      </Box>
    );
}
// Sample server data for demonstration
export const getServerById = (id: string) => {
  return {
    id,
    name: "Production API Server",
    provider: "aws",
    region: "us-east-1",
    status: "online",
    ip: "54.23.212.100",
    connectionMethod: "SSH Key",
    sshKeyName: "prod-api-key",
  };
};

// Sample SSH keys data
export const sshKeys = [
  {
    id: "key-1234567890abcdef0",
    name: "Development Laptop",
    fingerprint: "SHA256:uDEXzrfDP6X8C8vfpEJK4FQxHCKOLE0xEdFrD/AHx23",
    created: "2023-05-15",
    lastUsed: "2023-12-10",
  },
  {
    id: "key-0987654321abcdef0",
    name: "CI/CD Pipeline",
    fingerprint: "SHA256:pFT5xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    created: "2023-06-20",
    lastUsed: "2023-12-15",
  },
  {
    id: "key-abcdef1234567890",
    name: "Production Deploy Key",
    fingerprint: "SHA256:rTY7xNvB8Y7D2vMxR3JK1FQxHCKOLE0xEdFrD/AHx23",
    created: "2023-04-10",
    lastUsed: "2023-12-18",
  },
]; 
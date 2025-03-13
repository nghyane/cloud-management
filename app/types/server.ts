export type ProviderKey = 'aws' | 'digitalocean' | 'linode' | 'vultr' | 'gcp' | 'personal' | 'unknown';

export interface ServerType {
  id: string;
  name: string;
  status: string;
  ip: string;
  region: string;
  cpu: number;
  ram: number;
  disk: number;
  uptime: string;
  provider: ProviderKey;
  os: string;
  created: string;
  lastBackup?: string;
  projectId?: string;
  projectName?: string;
  tags?: string[];
  usage: {
    cpu: number;
    ram: number;
    disk: number;
    network: {
      in: string;
      out: string;
    }
  };
  specs?: {
    cpuModel: string;
    ramType: string;
    diskType: string;
    networkSpeed: string;
  }
}

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  servers: number;
  created: string;
  owner: string;
  tags?: string[];
}

// Provider colors for badges
export const providerColors: Record<ProviderKey, string> = {
  aws: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
  digitalocean: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  linode: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  vultr: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  gcp: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  personal: "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400",
  unknown: "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400",
};

// Provider logos
export const providerImages: Record<ProviderKey, string> = {
  aws: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png",
  digitalocean: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/DigitalOcean_icon.svg/2048px-DigitalOcean_icon.svg.png",
  linode: "https://placekitten.com/26/26",
  vultr: "https://placekitten.com/27/27",
  gcp: "https://placekitten.com/28/28",
  personal: "/images/server-icon.png", // Placeholder for personal servers
  unknown: "/images/server-icon.png", // Placeholder for unknown provider
}; 
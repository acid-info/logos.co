{
  description = "Flake file for logos website ";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-24.05";
  };

  outputs = { self, nixpkgs }:
    let
        supportedSystems = ["x86_64-linux"  "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
        forEach = nixpkgs.lib.genAttrs supportedSystems;
        pkgsFor = nixpkgs.lib.genAttrs supportedSystems (
            system: import nixpkgs { inherit system; }
        );
      in rec {
        devShells = forEach (system: {
            default = pkgsFor.${system}.mkShellNoCC {
                packages = with pkgsFor.${system}.buildPackages; [
                    yarn # 1.22.22 
                    nodejs # v20.15.1
                ];
            };
        });
    };
}

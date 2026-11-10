# Bakes the CLI toolchain into the image at build time, instead of installing it
# at container-create time via a lifecycle command.
#
# Homebrew is installed *here* rather than via the devcontainer feature because
# features are layered on AFTER the image is built — so `brew` would not be
# available to run `brew bundle` from a Dockerfile layer. We install it to the
# canonical prefix (/home/linuxbrew/.linuxbrew) so `brew` pours prebuilt bottles
# instead of compiling from source.
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Homebrew + build prerequisites not already in the base image.
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    build-essential procps file unzip \
    && rm -rf /var/lib/apt/lists/*

# --- Homebrew (shallow, canonical prefix, owned by the vscode user) ----------
RUN mkdir -p /home/linuxbrew/.linuxbrew \
    && chown -R vscode:vscode /home/linuxbrew

USER vscode
ENV HOMEBREW_NO_AUTO_UPDATE=1 \
    HOMEBREW_NO_ANALYTICS=1 \
    NONINTERACTIVE=1
RUN git clone --depth=1 https://github.com/Homebrew/brew \
    /home/linuxbrew/.linuxbrew/Homebrew \
    && mkdir -p /home/linuxbrew/.linuxbrew/bin \
    && ln -s /home/linuxbrew/.linuxbrew/Homebrew/bin/brew \
    /home/linuxbrew/.linuxbrew/bin/brew


# Put brew on PATH for every subsequent layer, the running container, and
# interactive shells (bash + zsh, which is configured by the common-utils feature).
ENV PATH="/home/linuxbrew/.linuxbrew/bin:/home/linuxbrew/.linuxbrew/sbin:${PATH}"
RUN brew_env='eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' \
    && echo "$brew_env" >> ~/.bashrc \
    && echo "$brew_env" >> ~/.zshrc

# --- Brewfile packages -------------------------------------------------------
COPY --chown=vscode:vscode Brewfile /tmp/Brewfile
RUN brew bundle --file /tmp/Brewfile && rm /tmp/Brewfile

# --- tflint ------------------------------------------------------------------
# macOS-only Cask in Homebrew, so install the pinned Linux release binary and
# verify it against the release's published SHA256 checksum.
USER root
RUN TFLINT_VERSION=0.63.1 \
    && case "$(uname -m)" in \
    x86_64)        tflint_arch=amd64 ;; \
    aarch64|arm64) tflint_arch=arm64 ;; \
    *) echo "Unsupported arch for tflint: $(uname -m)" >&2; exit 1 ;; \
    esac \
    && tmp="$(mktemp -d)" \
    && base="https://github.com/terraform-linters/tflint/releases/download/v${TFLINT_VERSION}" \
    && zip="tflint_linux_${tflint_arch}.zip" \
    && curl -fsSL "${base}/${zip}"        -o "${tmp}/${zip}" \
    && curl -fsSL "${base}/checksums.txt" -o "${tmp}/checksums.txt" \
    && ( cd "${tmp}" && grep " ${zip}\$" checksums.txt | sha256sum -c - ) \
    && unzip -o "${tmp}/${zip}" -d "${tmp}" \
    && install -m 0755 "${tmp}/tflint" /usr/local/bin/tflint \
    && rm -rf "${tmp}"

USER vscode

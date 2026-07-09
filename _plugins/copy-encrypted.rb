Jekyll::Hooks.register :site, :post_write do |site|
  # 定义加密文件映射：加密版路径 => _site 里的目标路径
  encrypted_files = {
    "encrypted/my-target.html" => "test/2026/05/05/my-target.html"
  }

  encrypted_files.each do |src, dest|
    src_path = File.join(site.source, src)
    dest_path = File.join(site.dest, dest)

    if File.exist?(src_path)
      FileUtils.cp(src_path, dest_path)
      puts "✅ 已用加密版替换: #{dest}"
    else
      puts "⚠️ 加密文件不存在: #{src}"
    end
  end
end
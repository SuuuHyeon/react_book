package inhatc.cse.spring;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

@Configuration
public class AppConfig {

    @Bean(name = "multipartResolver")
    public CommonsMultipartResolver multipartResolver() {
        CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
        // 최대 업로드 가능한 바이트 크기 (예: 10MB)
        multipartResolver.setMaxUploadSize(10485760);
        return multipartResolver;
    }
}
